from setuptools import setup

setup(name='unipix',
      version='0.1',
      description='PixelArt to 3D models generator',
      url='https://github.com/PaulBreugnot/UniPix',
      author='Aubin Rabouan, Paul Breugnot',
      license='GPLv3',
      packages=['pixel3d', 'pixel3Dsite'],
      install_requires=[
          'Pillow',
          'numpy-stl',
          'numpy',
          'django',
          'djangorestframework',
          'django-cors-headers'
      ],
      zip_safe=False)
