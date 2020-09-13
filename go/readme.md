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
for initialisation; condition; post {  
}

// Example
sum := 0
for i := 0; i < 10; i++ {
    sum += i
}
fmt.Println(sum)

// Or `for each`
for index, value := range array {
    ...
}

// Go isn't provided the while loop
// But we cant use the for loop alternative
sum := 1
for sum < 1000 {
    sum += sum
}
```

## Switch
```go
// Structure
switch (expression statement or variable) {
    case constant_1: {
        ...
    }
    ...
    case constant_n: {
        ...
    }
    default: {
        ...
    }
}

// Default
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

// Mutilple expressions in case
letter := "i"
switch letter {
    case "a", "e", "i", "o", "u": //multiple expressions in case
        fmt.Println("Nguyên âm")
    default:
        fmt.Println("Không phải một nguyên âm")
}

// Expressionless switch
num := 75
switch {
    case num >= 0 && num <= 50:
        fmt.Println("num lớn hơn 0 và nhỏ hơn 50")
    case num >= 51 && num <= 100:
        fmt.Println("num lớn hơn 51 và nhỏ hơn 100")
    case num >= 101:
        fmt.Println("num lớn hơn 100")
}

// Fallthrough: By default, the switch statement will be
// exited after the right case ran. `fallthrough` will
// keep the switch statement running to checking in
// the next case.
switch num := number(); { // num không phải là một hằng số
	case num < 50:
		fmt.Printf("%d thì nhỏ hơn 50\n", num)
		fallthrough
	case num < 100:
		fmt.Printf("%d thì nhỏ hơn 100\n", num)
		fallthrough
	case num < 200:
		fmt.Printf("%d thì nhỏ hơn 200", num)
}
```

## Array/Slice
```go
// Array
var a [3]int // Int array with length 3
// Slice
var a []int // Int array with length 3

// Or
a := [3]int{12, 78, 50} // Short hand declaration to create array
a := []int{12, 78, 50} // Short hand declaration to create slice

// We can skip declaring an array length when creating a new array
a := [...]int{12, 78, 50}

// Slice is a type of Array.
// But its width can be changing in running time.
```
*Notice: `Array` in Go is a basic type (not using pointer or preference). That's why when we assign an array/slice to a new variable, it will be create a new copy of the old array for the new variable. It is the same when we assign an array to a function as an argument.*
```go
a := [...]string{"USA", "China", "India", "Germany", "France"}
b := a // a copy of a is assigned to b
b[0] = "Singapore"
fmt.Println("a is ", a)
fmt.Println("b is ", b)
```
```
a is [USA China India Germany France]
b is [Singapore China India Germany France]
```
*Vice versa, `Slice` uses pointer and preference.*
```go
darr := [...]int{57, 89, 90, 82, 100, 78, 67, 69, 59}
dslice := darr[2:5]
fmt.Println("array before",darr)
for i := range dslice {
    dslice[i]++
}
fmt.Println("array after",darr) 
```
```
array before [57 89 90 82 100 78 67 69 59]
array after [57 89 91 83 101 78 67 69 59]
```

### Array/Slice: Slice range
Go is used slice range syntax such as Python, MATLAB

Ex: `arr[2:]`, `arr[:2]`, `arr[1:2]`,...
```go
arr = [0, 1, 2, 3]
arr[:3] // [0, 1, 2]
```

### Array/Slice: Create a slice using `make`
```go
i := make([]type, length, capacity)
Ex:
i := make([]int, 5, 5)
```

### Array/Slice: Memory improvement
If we create a new slice from an array. The slice will keep a reference to the array. And when we don't use the array anymore, its memory won't be release because the slice still keep a reference to the array.

To fix this. We should create a new copy of the slice using `copy`.
```go
countries := []string{"USA", "Singapore", "Germany", "India", "Australia"}
neededCountries := countries[:len(countries)-2]
countriesCpy := make([]string, len(neededCountries))
copy(countriesCpy, neededCountries) //copies neededCountries to countriesCpy
```

## Map
A map is a builtin type in Go that is used to store key-value pairs.
```go
make(map[type of key]type of value)  

// Ex:
employeeSalary := make(map[string]int) 
```
Empty value of `map` called `nil`. If we are trying to add a new item to `nil map`, a `run-time panic` will occur. Hence the map has to be initialized and collected mermory before adding elements by using `make`.
```go
var employeeSalary map[string]int
employeeSalary["steve"] = 12000 // run-time panic
```
Adding elements to a `map`
```go
personSalary := make(map[string]int)
personSalary["steve"] = 12000
personSalary["jamie"] = 15000
personSalary["mike"] = 9000
fmt.Println("personSalary map contents:", personSalary)
```
```
personSalary map contents: map[steve:12000 jamie:15000 mike:9000]
```
We can add elements while declaring a new map.
```go
personSalary := map[string]int {
    "steve": 12000,
    "jamie": 15000,
}
personSalary["mike"] = 9000
fmt.Println("personSalary map contents:", personSalary)
```
### Map: Retrieving value for a key from a map
```go
employeeSalary := map[string]int{
    "steve": 12000,
    "jamie": 15000,
    "mike": 9000,
}
employee := "jamie"
salary := employeeSalary[employee]
fmt.Println("Salary of", employee, "is", salary)
```
What will happen if an `element is not present`? The map will return the zero value of the type of that element. In the case of `employeeSalary` map, if we try to access an element which is not present, the zero value of int which is 0 will be returned.

### Map: Checking if a key exists
```go
value, ok := map[key]
```

### Map: Iterate over all elements in a map
```go
employeeSalary := map[string]int{
    "steve": 12000,
    "jamie": 15000,
    "mike":  9000
}
fmt.Println("Contents of the map")
for key, value := range employeeSalary {
    fmt.Printf("employeeSalary[%s] = %d\n", key, value)
}
```

## Map: Deleting items from a map
```go
delete(map, key)
```

## Map: Map of structs
So far we have only been storing the `salary` of the `employee` in the map. Wouldn't it be nice if we are able to store the country of each `employee` in the map too? This can be achieved by using a `map of structs`. The employee can be represented as a struct containing fields `salary` and `country` and they will be stored in the map with a string key and struct value.
```go
emp1 := employee{
    salary:  12000,
    country: "USA",
}
emp2 := employee{
    salary:  14000,
    country: "Canada",
}
emp3 := employee{
    salary:  13000,
    country: "India",
}
employeeInfo := map[string]employee{
    "Steve": emp1,
    "Jamie": emp2,
    "Mike":  emp3,
}

for name, info := range employeeInfo {
    fmt.Printf("Employee: %s Salary:$%d  Country: %s\n", name, info.salary, info.country)
}
```

## Map: Length of the map
```go
len(map)
```

## Map: Maps are reference types
Similar to `slice`, `map` are reference types. When a map is assigned to a new variable, they both point to the same internal data structure. Hence changes made in one will reflect in the other.
```go
employeeSalary := map[string]int{
    "steve": 12000,
    "jamie": 15000,     
    "mike": 9000,
}
fmt.Println("Original employee salary", employeeSalary)
modified := employeeSalary
modified["mike"] = 18000
fmt.Println("Employee salary changed", employeeSalary)
```

## Map: Maps equality
Maps can't be compared using the `==` operator. The `==` can be only used to check if a map is nil.

## Function

### Function: Multiple return values
```go
func funcName() (string string) {
    return "one", "two"
}
```

### Function: Named return values
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

## Variadic function
Functions in general accept only a fixed number of arguments. A variadic function is a function that accepts a variable number of arguments.
```go
func hello(a int, b ...int) {  
}

hello(1, 2) // Passing one argument "2" to b  
hello(5, 6, 7, 8, 9) // Passing arguments "6, 7, 8 and 9" to b 
hello(1) // It is also possible to pass zero arguments to a variadic function
```
Passing a slice to variadic function
```go
func find(num int, nums ...int) {  
    fmt.Printf("type of nums is %T\n", nums)
    found := false
    for i, v := range nums {
        if v == num {
            fmt.Println(num, "found at index", i, "in", nums)
            found = true
        }
    }
    if !found {
        fmt.Println(num, "not found in ", nums)
    }
    fmt.Printf("\n")
}
func main() {  
    nums := []int{89, 90, 95}
    find(89, nums...)
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

