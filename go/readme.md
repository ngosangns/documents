Source: https://golangbot.com

Translate: https://techmaster.vn

## Structure of go program
```go
package main // Package name

import "fmt" // The orthers package that we want to import

// The functions
func (self blabla) main(agruments) (return type) { 
    ...
}
```

## Varriable/Constant
```go
var variable_name data_type

// Ex
var a int
var b string

// Create `a` as a string varriable and set it a value
a := "Hello world!"

// Constant
const c := "Hi there!"
```

## Base Go types
- string
- array: `array` and `slice`
- map
- bool

- integer
  
| Type | Limit |
| -- | -- |
uint8 (byte) | 0 – 255
uint16 | 0 – 65535
uint32 | 0 – 4294967295
uint64 | 0 – 18446744073709551615
int8 | -128 – 127
int16 | -32768 – 32767
int32 (rune) | -2147483648 – 2147483647
int64 | -9223372036854775808 – 9223372036854775807

- float: `float32` and `float64` (suggested)
  
- complex:
    - `complex64`: Real path is `float32`
    - `complex128`: Real path is `float64`
    - Ex: ```c := 6 + 7i```

## If/Else statement
```go
if condition {  
} else if condition {
} else {
}
```
*Notice: `else if` and `else` is required to lie after a `}` (not newline). Because Go is automatically adding a `;` after `}` if we broke to the newline.*
```go
if num%2 == 0 {  
     fmt.Println("the number is even")
};  // Dấu ; được chèn bởi Go
else {  
     fmt.Println("the number is odd")
}
```
In another variation of If statement that an `optional statement` will run before the `condition`.
```go
if statement; condition {  
}
```

## For/While loop
```go
for index, value := range array {
    ...
}


// Or
sum := 0
for i := 0; i < 10; i++ {
    sum += i
}
fmt.Println(sum)

// Go isn't provided the while loop
// But we cant use the for loop alternative
sum := 1
for sum < 1000 {
    sum += sum
}
```

## Switch
```go
i := 2
switch i {
    case 1:
        fmt.Println("one")
    case 2:
        fmt.Println("two")
    case 3:
        fmt.Println("three")
    default:
        fmt.Println("zero")
}
```

## Slice range
Go is used slice range syntax such as Python, MATLAB

Ex: `arr[2:]`, `arr[:2]`, `arr[1:2]`,...
```go
arr = [0, 1, 2, 3]
arr[:3] // [0, 1, 2]
```

## Multiple return values
```go
func funcName() (string string) {
    return "one", "two"
}
```

## Named return values
```go
// Named return value as varriable that It's automatically
// declares at the fisrt line of function body and return
// when they meet the `return` command
func rectProps(length, width float64) (area, perimeter float64) {  
    area = length * width
    perimeter = (length + width) * 2
    return //no explicit return value
}
```

## Package
`Package` is as usable as `Class` in OOP programming language.

1. We want to create a folder and name it by package name. All of the files `.go` in that folder will declare package name same as the name of the folder containing it.

Ex:
```
geometry // main
    geometry.go
    rectangle // rectangle
        rectprops.go
```
```go
//rectprops.go
package rectangle

import "math"

func Area(len, wid float64) float64 {  
    area := len * wid
    return area
}

func Diagonal(len, wid float64) float64 {  
    diagonal := math.Sqrt((len * len) + (wid * wid))
    return diagonal
}
```
```go
//geometry.go
package main 

import (  
    "fmt"
    "geometry/rectangle" //importing package tùy chỉnh
)

func main() {  
    var rectLen, rectWidth float64 = 6, 7
    fmt.Println("Geometrical shape properties")

        /*Hàm Area của package rectangle được sử dụng
        */
    fmt.Printf("area of rectangle %.2f\n", rectangle.Area(rectLen, rectWidth))
        /*Hàm Diagonal của package rectangle được sử dụng
        */
    fmt.Printf("diagonal of the rectangle %.2f ",rectangle.Diagonal(rectLen, rectWidth))
}
```

### Package: Exported names
If we `uppercase` the `first character` of the `method name`, it's called `exported names` (can use as a method in the other package importing its package).

If the `first character` of the `method name` is `lowercase`. When we invoke it in the other package, the compile will return the error: `file.go:line: cannot refer to unexported name library.methodName`.

### Package: Init function
A package can be containing a function named `init` (creation function). This function doesn't have arguments and return value (void). It is used such as `constructor` in the other OOP programming languages.

### Package: The order of launch
- Imported packages
- Global varriables
- Init function
- Main function

## Blank identifier
If we create an unusable variable. In compiling time, the compiler will return the error `file.go:line: imported and not used: "package"`.

But in many cases, we want to use an unusable variable lately. That is the time we use `blank identifier`.

```go
package main

import (  
    "geometry/rectangle" 
)

var _ = rectangle.Area // error silencer (bỏ qua lỗi)

func main() {

}
```

