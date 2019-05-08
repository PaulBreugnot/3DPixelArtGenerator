# -*- coding: utf-8 -*-
"""
Created on Mon Feb 25 23:14:00 2019

@author: aubin
"""

from stl import mesh
import numpy


def cube(x_pixel, z, pixel_size):
    """
    Creates a cube of size x*x*z at origin
    """

    x = pixel_size * x_pixel

    # Create 3 faces of a cube
    data = numpy.zeros(12, dtype=mesh.Mesh.dtype)
    
    # Top of the cube
    data['vectors'][0] = numpy.array([[0, x, z],
                                      [x, 0, z],
                                      [0, 0, z]])
    data['vectors'][1] = numpy.array([[x, 0, z],
                                      [0, x, z],
                                      [x, x, z]])
    #bottom
    data['vectors'][6] = numpy.array([[0, x, 0],
                                      [x, 0, 0],
                                      [0, 0, 0]])
    data['vectors'][7] = numpy.array([[x, 0, 0],
                                      [0, x, 0],
                                      [x, x, 0]])
    
    # Right face
    data['vectors'][2] = numpy.array([[x, 0, 0],
                                      [x, 0, z],
                                      [x, x, 0]])
    data['vectors'][3] = numpy.array([[x, x, z],
                                      [x, 0, z],
                                      [x, x, 0]])
    
    data['vectors'][8] = numpy.array([[0, 0, 0],
                                      [0, 0, z],
                                      [0, x, 0]])
    data['vectors'][9] = numpy.array([[0, x, z],
                                      [0, 0, z],
                                      [0, x, 0]])
    
    # Left face
    data['vectors'][4] = numpy.array([[0, 0, 0],
                                      [x, 0, 0],
                                      [x, 0, z]])
    data['vectors'][5] = numpy.array([[0, 0, 0],
                                      [0, 0, z],
                                      [x, 0, z]])
    
    data['vectors'][10] = numpy.array([[0, x, 0],
                                       [x, x, 0],
                                       [x, x, z]])
    data['vectors'][11] = numpy.array([[0, x, 0],
                                       [0, x, z],
                                       [x, x, z]])

    cube_mesh = mesh.Mesh(data.copy())

    return cube_mesh
