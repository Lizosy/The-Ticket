# Data Art Generator using p5.js

## Overview

This repository hosts a unique web application developed with p5.js, a versatile JavaScript library. The application allows users to input personal data, which is creatively transformed into visually captivating data art. The code provided here is part of the art generation process.

## Features

- **Data Input:** Users can provide various personal details, including age, name, gender, location, date, month, work experience, and hobbies.
- **Data Art Generation:** The code in this repository generates artistic visualizations based on the user's input.
- **Colorful Visuals:** The data art is created using a colorful and dynamic visual style.
- **Image Saving:** The generated art is saved as a PNG image.

## How it Works

The `generateArtWithInput` function is the core of this art generation process. It takes user-provided data as parameters and uses p5.js to create a unique data art piece. Here's a brief breakdown of the code:

- Age and Gender: The age and gender of the user influence the color and size of the central circle.
- Date and Month: These inputs determine the shape of an arc in the center of the canvas.
- Work Experience: Multiple circles are drawn around the center, each with varying colors based on work experience.
- Hobbies: Hobbies are represented as small circles, both inside and outside of the central circle.
- Name: The user's name is displayed at the bottom of the canvas.

The resulting data art is saved as "generated_art.png" and can be accessed by the user.

## Getting Started

To run this code and generate your data art, follow these steps:

1. Clone this repository to your local machine.
2. Open the project directory in your preferred code editor.
3. Open the `index.html` file in a web browser to access the web application.
4. Use the provided user interface to input your data, and the art will be generated and saved as "generated_art.png."

## Future Development

This project is a work in progress, with potential enhancements such as improving the art generation algorithms, expanding user input options, and integrating social media sharing functionality. Your contributions and feedback are welcome!

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or feedback, please feel free to contact us at [lizwozmain@gmail.com].

