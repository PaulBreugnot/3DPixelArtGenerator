
from PIL import Image


def compute_simple_pixel_heights(image):
    with Image.open(image, 'r') as im:
        pixel_values = list(im.getdata())
        image_size = im.size

    colors = _compute_image_colors(pixel_values)

    pixel_heights = []
    for i in range(image_size[1]):
        pixel_heights.append([])
        for j in range(image_size[0]):
            pixel_value = pixel_values[i * image_size[0] + j]
            if pixel_value[3] != 0:
                pixel_heights[i].append(1 - colors.index(pixel_value) / len(colors))
            else:
                pixel_heights[i].append(0)

    return pixel_heights


def _compute_image_colors(pixel_values):
    #  Determining the colors in the sprite
    null_pixels_count = 0
    for i in pixel_values:
        if i[3] == 0:
            # Transparent pixel
            null_pixels_count += 1
    print("Number of void pixels : " + str(null_pixels_count))

    colors = []
    for i in pixel_values:
        if i not in colors:
            if i[3] != 0:
                colors.append(i)
    print("Number of colors : " + str(len(colors)))

    return colors
