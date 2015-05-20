# FG
Another grid system based on the flex display property.

## Introduction
Grid systems are used for creating page layouts through a series of rows and columns that house your content. 
Here's how the grid system works:

Rows can be placed within a container for centering the content but is not mandatory.
Cols can be placed outside a row (ie to create a vertical menu) but it´s better place it inside rows.

- Use rows to create horizontal groups of columns.
- Content should be placed within columns, and only columns may be immediate children of rows.
- Predefined grid classes like .s3, m3 or .l3 are available for quickly making grid layouts. 
- Columns don´t create gutters (gaps between column content) via padding.
- Grid columns are created by specifying the number of twelve available columns you wish to span: 
  For example, three equal columns would use three .col .s4
- There are helper classes to define how the items inside a row or a col are placed: (top,mid,bot,start,center,end,between,around)
  
##Grid options
|     | small   |  medium |  large  |
|---  |---      |---      | ---     |
| Size| < 601px | < 993px | >= 995px|
| Class | .s    | .m      |.l       |

##Info & Examples
[FG](http://iagolast.github.io/FG)
