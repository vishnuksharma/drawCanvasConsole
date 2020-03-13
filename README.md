*** The Problem ***

__Description__

You're given the task of writing a simple console version of a drawing program. 
At this time, the functionality of the program is quite limited but this might change in the future. 
In a nutshell, the program should work as follows:
 1. Create a new canvas
 2. Start drawing on the canvas by issuing various commands
 3. Quit

## Available Scripts
In the solution, you should terminal and run following CMD:
### NodeJS should be install in your system.
### `npm run node` or  `node index.js`

Command 		Description

`C w h`           Should create a new canvas of width w and height h.

`L x1 y1 x2 y2`   Should create a new line from (x1,y1) to (x2,y2). Currently only
                horizontal or vertical lines are supported. Horizontal and vertical lines
                will be drawn using the 'x' character.

`R x1 y1 x2 y2`  Should create a new rectangle, whose upper left corner is (x1,y1) and
                lower right corner is (x2,y2). Horizontal and vertical lines will be drawn
                using the 'x' character.

`B x y c`         Should fill the entire area connected to (x,y) with "colour" c. The
                behavior of this is the same as that of the "bucket fill" tool in paint
                programs.

`Q`               Should quit the program.

### __Sample I/O__

Below is a sample run of the program. User input is prefixed with enter command:

enter command: `C 20 4`

enter command: `L 1 2 6 2`

enter command: `L 6 3 6 4`

enter command: `R 14 1 18 3`

enter command: `B 10 3 o`

enter command: `Q`

### For Example:
![Example image](example_img.png?raw=true "example image")
