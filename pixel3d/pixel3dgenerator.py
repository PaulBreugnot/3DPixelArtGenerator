# -*- coding: utf-8 -*-
"""
Created on Mon Feb 25 20:50:28 2019

@author: aubin
"""

import sys
import json
from pixel3d.generators import simple as simple_generator
from pixel3d.exporter import stl_export as stl_exporter
from pixel3d.exporter import height_map_exporter as height_map_exporter

def generateHeightMap(input_file, max_height):

    pixel_heights = simple_generator.compute_simple_pixel_heights(input_file, max_height)

    height_map_json = height_map_exporter.generate_height_map(pixel_heights)

    return height_map_json

def exportToStl(height_map, output_file, pixel_size):
    pixel_art_model = stl_exporter.generate_stl(json.loads(height_map), pixel_size)

    pixel_art_model.save(output_file)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2], 3, 20)
