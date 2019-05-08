from setuptools import setup

setup(name='3dpixelgen',
      version='0.1',
      description='PixelArt to 3D models generator',
      url='https://github.com/aubinrabouan/3DPixelArtGenerator',
      author='Aubin Rabouan, Paul Breugnot',
      license='GPLv3',
      packages=['pixel3d'],
      install_requires=[
          'Pillow',
          'numpy-stl',
          'numpy'
      ],
      zip_safe=False)
