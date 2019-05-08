# -*- coding: utf-8 -*-
"""
Created on Mon Feb 25 20:50:28 2019

@author: aubin
"""

import sys
from stl import mesh
import numpy

import model
import generators


def main(input_file, output_file, pixel_size, max_height):

    pixel_heights = generators.compute_simple_pixel_heights(input_file)

    pixel_art_model = _generate_model(pixel_heights, pixel_size, max_height)

    pixel_art_model.save(output_file)


def _generate_model(pixel_heights, pixel_size, max_height):
    """
    Generate the 3D model according to the specified pixel heights.
    :param pixel_heights: array of pixel height. Might be the same size as the original picture.
    :param pixel_size: Size of each pixel in the STL file.
    :return: Generated mesh.
    """

    data = numpy.zeros(0, dtype=mesh.Mesh.dtype)
    pixel_art_model = mesh.Mesh(data, remove_empty_areas=False)

    for i in range(len(pixel_heights)):
        for j in range(len(pixel_heights[i])):
            pixel_height = pixel_heights[i][j]
            if pixel_height > 0:
                new_pixel = model.cube(1, pixel_height * max_height, pixel_size)  # generate the pixel at origin
                new_pixel.translate([i * pixel_size, j * pixel_size, 0.0])    # translate to the position in x an y
                pixel_art_model = mesh.Mesh(numpy.concatenate([
                    pixel_art_model.data,
                    new_pixel.data,
                ]))

    return pixel_art_model


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2], 3, 20)
