# -*- coding: utf-8 -*-
"""
Created on Mon Feb 25 23:14:00 2019

@author: aubin
"""

from stl import mesh
import numpy


def generate_stl(pixel_map, color_map, pixel_size):
    """
    Generate the 3D model according to the specified pixel heights.
    :param pixel_heights: array of pixel height. Might be the same size as the original picture.
    :param pixel_size: Size of each pixel in the STL file.
    :return: Generated mesh.
    """

    data = numpy.zeros(0, dtype=mesh.Mesh.dtype)
    pixel_art_model = mesh.Mesh(data, remove_empty_areas=False)

    for row_index, row in pixel_map.items():
        for pixel_index, pixel in row.items():
            pixel_height = 0
            height_found = False
            i = 0
            while i < len(color_map) and not height_found:
                if (color_map[i]["r"], color_map[i]["g"], color_map[i]["b"]) == (pixel["r"], pixel["g"], pixel["b"]):
                    height_found = True
                    pixel_height = color_map[i]["h"]
                i+=1

            new_pixel = cube(1, pixel_height, pixel_size)  # generate the pixel at origin
            new_pixel.translate([row_index * pixel_size, pixel_index * pixel_size, 0.0])    # translate to the position in x an y
            pixel_art_model = mesh.Mesh(numpy.concatenate([
                pixel_art_model.data,
                new_pixel.data,
            ]))

    return pixel_art_model


def cube(x_pixel, z, pixel_size):
    """
    Creates a cube of size x*x*z at origin
    """

    x = pixel_size * x_pixel

    # Create 3 faces of a cube
    data = numpy.zeros(12, dtype=mesh.Mesh.dtype)

    # Top of the cube
    data['vectors'][0] = numpy.array([[0, 0, z],
                                      [x, 0, z],
                                      [0, x, z]])
    data['vectors'][1] = numpy.array([[x, 0, z],
                                      [x, x, z],
                                      [0, x, z]])
    #bottom
    data['vectors'][6] = numpy.array([[0, x, 0],
                                      [x, 0, 0],
                                      [0, 0, 0]])
    data['vectors'][7] = numpy.array([[x, 0, 0],
                                      [0, x, 0],
                                      [x, x, 0]])

    # Right face
    data['vectors'][2] = numpy.array([[x, 0, 0],
                                      [x, x, 0],
                                      [x, 0, z]])
    data['vectors'][3] = numpy.array([[x, x, z],
                                      [x, 0, z],
                                      [x, x, 0]])

    data['vectors'][8] = numpy.array([[0, 0, 0],
                                      [0, 0, z],
                                      [0, x, 0]])
    data['vectors'][9] = numpy.array([[0, x, z],
                                      [0, x, 0],
                                      [0, 0, z]])

    # Left face
    data['vectors'][4] = numpy.array([[0, 0, 0],
                                      [x, 0, 0],
                                      [x, 0, z]])
    data['vectors'][5] = numpy.array([[0, 0, 0],
                                      [x, 0, z],
                                      [0, 0, z]])

    data['vectors'][10] = numpy.array([[0, x, 0],
                                       [x, x, z],
                                       [x, x, 0]])
    data['vectors'][11] = numpy.array([[0, x, 0],
                                       [0, x, z],
                                       [x, x, z]])

    cube_mesh = mesh.Mesh(data.copy())

    return cube_mesh
