
from PIL import Image

def imageToRGBarray(image):
    with Image.open(image, 'r') as im:
        pixel_values = list(im.getdata())
        image_size = im.size

    image_array = []
    for i in range(image_size[1]):
        image_array.append([])
        for j in range(image_size[0]):
            image_array[i].append(pixel_values[i * image_size[0] + j])

    return image_array
