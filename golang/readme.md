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

## String
A string is a slice of bytes in Go. Strings can be created by enclosing a set of characters inside double quotes " ".

### String: Accessing individual bytes of a string
Use as `array`, `slice`
```go
for i := 0; i < len(s); i++ {
    fmt.Printf("%x ", s[i]) // %x: hex, %c: char
}
fmt.Printf("%s", s) // %s: string
```
```
String: Hello World
Hex: 48 65 6c 6c 6f 20 57 6f 72 6c 64
Char: H e l l o W o r l d
```

### String: Bug in Unicode
When using above code for a special character
```
String: Señor
Char: S e Ã ± o r
Hex: 53 65 c3 b1 6f 72
```
The reason is that the Unicode code point of `ñ` is `U+00F1` and its UTF-8 encoding occupies 2 bytes `c3` and `b1`. In UTF-8 encoding a code point can occupy more than 1 byte.

So how do we solve this? This is where `rune` saves us.

### String: Rune
A `rune` is a builtin type in Go and it's the alias of `int32`. `rune` represents a Unicode code point in Go. It doesn't matter how many bytes the code point occupies, it can be represented by a `rune`.

```go
runes := []rune(s)
for i := 0; i < len(runes); i++ {
    fmt.Printf("%c ", runes[i])
}
```
```
String: Señor  
Char: S e ñ o r
```

### String: Creating a string from a slice of bytes/runes
```go
// Byte
byteSlice := []byte{0x43, 0x61, 0x66, 0xC3, 0xA9} // Hex
// Or
byteSlice := []byte{67, 97, 102, 195, 169} // Dec

str := string(byteSlice)
fmt.Println(str)

// Rune
runeSlice := []rune{0x0053, 0x0065, 0x00f1, 0x006f, 0x0072}
str := string(runeSlice)
fmt.Println(str)
```

### String: String length
The `RuneCountInString(s string) (n int)` function of the `utf8` package can be used to find the length of the string.

*Notice: The `length` is not the `number of bytes`*
```go
import (  
    "fmt"
    "unicode/utf8"
)

func main() {  
    word1 := "Señor"
    fmt.Printf("String: %s\n", word1)
    fmt.Printf("Length: %d\n", utf8.RuneCountInString(word1))
    fmt.Printf("Number of bytes: %d\n", len(word1))

    fmt.Printf("\n")
    word2 := "Pets"
    fmt.Printf("String: %s\n", word2)
    fmt.Printf("Length: %d\n", utf8.RuneCountInString(word2))
    fmt.Printf("Number of bytes: %d\n", len(word2))
}
```
```
String: Señor  
Length: 5  
Number of bytes: 6

String: Pets  
Length: 4  
Number of bytes: 4  
```

### String: String comparison
The `==` operator is used to compare two strings for equality. If both the strings are equal, then the result is `true` else it's `false`.

### String: String concatenation
The most simple way to perform string concatenation is using the `+` operator.
```go
result := string1 + " " + string2
```
The second way to concatenate strings is using the `Sprintf` function of the `fmt` package.
```go
result := fmt.Sprintf("%s %s", string1, string2)
```

### String: Strings are immutable
```go
h := "hello"
// Any valid unicode character within single quote is a rune
h[0] = 'a'
```
```
file.go:line:column:cannot assign to s[0]
```
To workaround this string immutability, strings are converted to a slice of runes. Then that slice is mutated with whatever changes are needed and converted back to a new string.
```go
func mutate(s []rune) string {  
    s[0] = 'a' 
    return string(s)
}
func main() {  
    h := "hello"
    fmt.Println(mutate([]rune(h)))
}
```

## Pointer
A pointer is a variable which stores the memory address of another variable.
```go
// Assign a new pointer
b := 255
var a *int = &b
fmt.Printf("Type of a is %T\n", a)
fmt.Println("address of b is", a)

fmt.Println("")

// Assign a new pointer and collect it memory
size := new(int)
fmt.Printf("Size value is %d, type is %T, address is %v\n", *size, size, size)
*size = 85
fmt.Println("New size value is", *size)
```
```
Type of a is *int
address of b is 0x1040a124

Size value is 0, type is *int, address is 0xc000100010
New size value is 85
```
The zero value of a pointer is `nil`.

### Pointer: Passing pointer to a function
```go
func change(val *int) {  
    *val = 55
}
```

### Pointer: Returning pointer from a function
```go
func hello() *int {  
    i := 5
    return &i
}
```

### Pointer: Pass a pointer to an array as a argument to a function
```go
func modify(arr *[3]int) {  
    (*arr)[0] = 90
    // Or shorthand is
    arr[0] = 90
}

func main() {  
    a := [3]int{89, 90, 91}
    modify(&a)
    fmt.Println(a)
}
```
```
[90 90 91]
```
*Although this way of passing a pointer to an array as a argument to a function and making modification to it works, it is not the idiomatic way of achieving this in Go. We have `slice` for this.*

Lets rewrite the same program using `slice`
```go
func modify(sls []int) {  
    sls[0] = 90
}

func main() {  
    a := [3]int{89, 90, 91}
    modify(a[:])
    fmt.Println(a)
}
```

## Struct
A struct is a user-defined type that represents a collection of fields.
```go
type Employee struct {  
    firstName, lastName     string
    age                     int
}

func main() {
    emp1 := Employee{
        firstName: "Sam",
        age:       25,
        lastName:  "Anderson"
    }
}
```
### Struct: Creating anonymous structs
```go
emp3 := struct {
        firstName string
        lastName  string
        age       int
    }{
        firstName: "Andreah",
        lastName:  "Nikola",
        age:       31
    }
```

### Struct: Zero value of a struct
When a struct is defined and it is not explicitly initialized with any value, the fields of the struct are assigned their zero values by default.
```go
type Employee struct {  
    firstName string
    lastName  string
    age       int
    salary    int
}

func main() {  
    var emp4 Employee //zero valued struct
    fmt.Println("First Name:", emp4.firstName)
    fmt.Println("Last Name:", emp4.lastName)
    fmt.Println("Age:", emp4.age)
    fmt.Println("Salary:", emp4.salary)
}
```
```
First Name:
Last Name:
Age: 0
Salary: 0
```
It is also possible to specify values for some fields and ignore the rest. In this case, the ignored fields are assigned zero values.
```go
type Employee struct {  
    firstName string
    lastName  string
    age       int
    salary    int
}

func main() {  
    emp5 := Employee{
        firstName: "John",
        lastName:  "Paul"
    }
}
```

### Struct: Pointers to a struct
It is also possible to create pointers to a struct.

### Struct: Anonymous fields
It is possible to create structs with fields that contain only a type without the field name. These kinds of fields are called anonymous fields.
```go
type Person struct {  
    string
    int
}
```
Even though anonymous fields do not have an explicit name, by default the name of an anonymous field is the name of its type.
```go
type Person struct {  
    string
    int
}

func main() {  
    p1 := Person{
        string: "naveen",
        int:    50,
    }
    fmt.Println(p1.string)
    fmt.Println(p1.int)
}
```

### Struct: Promoted fields
Fields that belong to an anonymous struct field in a struct are called promoted fields since they can be accessed as if they belong to the struct which holds the anonymous struct field.
```go
type Address struct {  
    city string
    state string
}
type Person struct {  
    name string
    age  int
    Address
}

func main() {  
    p := Person{
        name: "Naveen",
        age:  50,
        Address: Address{
            city:  "Chicago",
            state: "Illinois",
        },
    }

    fmt.Println("Name:", p.name)
    fmt.Println("Age:", p.age)
    fmt.Println("City:", p.city)   // `city` is promoted field
    fmt.Println("State:", p.state) // `state` is promoted field
}
```

### Struct: Exported structs and fields
If a struct type starts with a capital letter, then it is an exported type and it can be accessed from other packages. Similarly, if the fields of a struct start with caps, they can be accessed from other packages.

### Struct: Structs Equality
Structs are value types and are comparable if each of their fields are comparable. Two struct variables are considered equal if their corresponding fields are equal.
```go
name1 := name{
    firstName: "Steve",
    lastName:  "Jobs",
}
name2 := name{
    firstName: "Steve",
    lastName:  "Jobs",
}
if name1 == name2 {
    fmt.Println("name1 and name2 are equal")
} else {
    fmt.Println("name1 and name2 are not equal")
}

name3 := name{
    firstName: "Steve",
    lastName:  "Jobs",
}
name4 := name{
    firstName: "Steve",
}

if name3 == name4 {
    fmt.Println("name3 and name4 are equal")
} else {
    fmt.Println("name3 and name4 are not equal")
}
```
```
name1 and name2 are equal
name3 and name4 are not equal
```
*Notice: Struct variables are not comparable if they contain fields that are not comparable.*
```go
type image struct {  
    data map[int]int
}

func main() {  
    image1 := image{
        data: map[int]int{
            0: 155,
        }}
    image2 := image{
        data: map[int]int{
            0: 155,
        }}
    if image1 == image2 { // Error
        fmt.Println("image1 and image2 are equal")
    }
}
```
```
./file.go:line:column: invalid operation: image1 == image2 (struct containing map[int]int cannot be compared)
```

## Method
A method is just a `function` with a special receiver type between the `func keyword` and the `method name`. The receiver can either be a struct type or non-struct type.

```go
func (t Type) methodName(parameter list) {
    ...
}
```

### Method: Pointer Receivers vs Value Receivers
The difference between `value receiver` and `pointer receiver` is, changes made inside a method with a pointer receiver is visible to the caller.

```go
func (e Employee) changeName(newName string) {  
    e.name = newName
}
func (e *Employee) changeAge(newAge int) {  
    e.age = newAge
}

func main() {  
    e := Employee{
        name: "Mark Andrew",
        age:  50,
    }
    fmt.Printf("Employee name before change: %s", e.name)
    e.changeName("Michael Andrew")
    fmt.Printf("\nEmployee name after change: %s", e.name)

    fmt.Printf("\n\nEmployee age before change: %d", e.age)
    (&e).changeAge(51)
    fmt.Printf("\nEmployee age after change: %d", e.age)
}
```
```
Employee name before change: Mark Andrew  
Employee name after change: Mark Andrew

Employee age before change: 50  
Employee age after change: 51
```

## Interface
In Go, an interface is a set of method signatures. When ***a type provides definition for all the methods in the interface***, it is said to implement the interface.
```go
type InterfaceName interface {  
    MethodName() int
}
```

### Interface: Practical use of an interface
```go
type SalaryCalculator interface {  
    CalculateSalary() int
}

type Permanent struct {  
    empId    int
    basicpay int
    pf       int
}

type Contract struct {  
    empId    int
    basicpay int
}

// salary of permanent employee is the sum of basic pay and pf
func (p Permanent) CalculateSalary() int {  
    return p.basicpay + p.pf
}

// salary of contract employee is the basic pay alone
func (c Contract) CalculateSalary() int {  
    return c.basicpay
}

/* total expense is calculated by iterating through
the SalaryCalculator slice and summing  
the salaries of the individual employees */
func totalExpense(s []SalaryCalculator) {  
    expense := 0
    for _, v := range s {
        expense = expense + v.CalculateSalary()
    }
    fmt.Printf("Total Expense Per Month $%d", expense)
}

func main() {  
    pemp1 := Permanent{
        empId:    1,
        basicpay: 5000,
        pf:       20,
    }
    cemp1 := Contract{
        empId:    3,
        basicpay: 3000,
    }
    employees := []SalaryCalculator{pemp1, cemp1}
    totalExpense(employees)

}
```

### Interface: Interface internal representation
An interface can be thought of as being represented internally by a tuple `(type, value)`. `type` is the underlying concrete type of the interface and `value` holds the value of the concrete type.

```go
type Worker interface {  
    Work()
}

type Person struct {  
    name string
}
func (p Person) Work() {  
    fmt.Println(p.name, "is working")
}

func describe(w Worker) {  
    fmt.Printf("Interface type %T value %v\n", w, w)
}

func main() {  
    p := Person{
        name: "Naveen"
    }
    var w Worker = p
    describe(w)
}
```

### Interface: Empty Interface
An interface that has zero methods is called an empty interface. It is represented as `interface{}`. Since the empty interface has zero methods, all types implement the empty interface.

### Interface: Type Assertion
Type assertion is used to extract the underlying value of the interface.
```go
func assert(i interface{}) {  
    s := i.(int) //get the underlying int value from i
    fmt.Println(s)
}
func main() {  
    var s interface{} = 56
    assert(s)
}
```
What will happen if the concrete type in the above program is not int?
```go
func assert(i interface{}) {  
    s := i.(int) 
    fmt.Println(s)
}
func main() {  
    var s interface{} = "Steven Paul"
    assert(s)
}
```
```
panic: interface conversion: interface {} is string, not int
```
To solve the above problem, we can use the syntax
```go
v, ok := i.(T)
```
```go
func assert(i interface{}) {  
    v, ok := i.(int)
    fmt.Println(v, ok)
}
func main() {  
    var s interface{} = 56
    assert(s)
    var i interface{} = "Steven Paul"
    assert(i)
}
```
```
56 true
0 false
```
### Interface: Get the type of value
```go
func findType(i interface{}) {  
    switch i.(type) {
    case string:
        fmt.Printf("I am a string and my value is %s\n", i.(string))
    case int:
        fmt.Printf("I am an int and my value is %d\n", i.(int))
    default:
        fmt.Printf("Unknown type\n")
    }
}
```
## Concurrency
### Concurrency: What is parallelism and how is it different from concurrency?
- Parallelism is doing lots of things at the same time.

    Ex: Lets assume that the person is jogging and also listening to music in his iPod. In this case the person is jogging and listening to music at the same time, that is he is doing lots of things at the same time. This is called parallelism.
- Concurrency is the capability to deal with lots of things at once.

    Ex: Let's consider a person jogging. During his morning jog, lets say his shoe laces become untied. Now the person stops running, ties his shoe laces and then starts running again. This is a classic example of concurrency. The person is capable of handling both running and tying shoe laces, that is the person is able to deal with lots of things at once

## Goroutine
Goroutines are functions or methods that run concurrently with other functions or methods. Goroutines can be thought of as light weight threads. The cost of creating a Goroutine is tiny when compared to a thread. 

### Goroutine: Advantages of Goroutines over threads
- Goroutines are extremely cheap when compared to threads. They are only a few kb in stack size and the stack can grow and shrink according to needs of the application whereas in the case of threads the stack size has to be specified and is fixed.
- The Goroutines are multiplexed to fewer number of OS threads. There might be only one thread in a program with thousands of Goroutines. If any Goroutine in that thread blocks say waiting for user input, then another OS thread is created and the remaining Goroutines are moved to the new OS thread. All these are taken care by the runtime and we as programmers are abstracted from these intricate details and are given a clean API to work with concurrency.
- Goroutines communicate using channels. Channels by design prevent race conditions from happening when accessing shared memory using Goroutines. Channels can be thought of as a pipe using which Goroutines communicate.

Create a Goroutine
```go
func hello() {  
    fmt.Println("Hello world goroutine")
}
func main() {  
    go hello()
    fmt.Println("main function")
}
```

## Channel
Channels can be thought as pipes using which Goroutines communicate. Similar to how water flows from one end to another in a pipe, data can be sent from one end and received from the another end using channels.

### Channel: Declaring a channel
Each channel has a type associated with it. This type is the type of data that the channel is allowed to transport. No other type is allowed to be transported using the channel.

`chan T` is a channel of type `T`.

The zero value of a channel is `nil`. `nil` channels are not of any use and hence the channel has to be defined using `make` similar to `maps` and `slices`.
```go
var a chan int
if a == nil {
    fmt.Println("channel a is nil, going to define it")
    a = make(chan int)
    fmt.Printf("Type of a is %T", a)
}
```
```
channel a is nil, going to define it  
Type of a is chan int  
```

### Channel: Sending and receiving from channel
```go
data := <- a // read from channel a
a <- data // write to channel a
```

### Channel: Sends and receives are blocking by default
Sends and receives to a channel are blocking by default. What does this mean? When a data is sent to a channel, the control is blocked in the send statement until some other Goroutine reads from that channel. Similarly when data is read from a channel, the read is blocked until some Goroutine writes data to that channel.

This property of channels is what helps Goroutines communicate effectively without the use of explicit locks or conditional variables that are quite common in other programming languages.

### Channel: Example with channels
```go
func hello(done chan bool) {  
    fmt.Println("Hello world goroutine")
    done <- true
}
func main() {  
    done := make(chan bool)
    go hello(done)
    <-done
    fmt.Println("main function")
}
```
In the above program we create a done `bool channel` and pass it as a parameter to the `hello` Goroutine. And then we are receiving data from the done channel. This line of code is blocking which means that until some Goroutine writes data to the `done` channel, the control will not move to the next line of code. Hence this eliminates the need for the time. Sleep which was present in the original program to prevent the main Goroutine from exiting.

The line of code `<-done` receives data from the done channel but does not use or store that data in any variable. This is perfectly legal.
```
Hello world goroutine  
main function
```

### Channel: Deadlock
If a Goroutine is sending data on a channel, then it is expected that some other Goroutine should be receiving the data. If this does not happen, then the program will panic at runtime with `Deadlock`.

Similarly if a Goroutine is waiting to receive data from a channel, then some other Goroutine is expected to write data on that channel, else the program will panic.
```go
func main() {  
    ch := make(chan int)
    ch <- 5
}
```
```
fatal error: all goroutines are asleep - deadlock!
```

### Channel: Unidirectional channels
All the channels we discussed so far are bidirectional channels, that is data can be both sent and received on them. It is also possible to create unidirectional channels, that is channels that only send or receive data.
```go
// we can only receive data from this channel
sendch := make(chan<- int)
```
If we are trying to write data to this channel, it will turn out an error
```go
func sendData(sendch chan<- int) {  
    sendch <- 10
}

func main() {  
    sendch := make(chan<- int)
    go sendData(sendch)
    fmt.Println(<-sendch)
}
```
```
invalid operation: <-sendch (receive from send-only type chan<- int)
```

### Channel: Closing channels and for range loops on channels
Senders have the ability to close the channel to notify receivers that no more data will be sent on the channel.

Receivers can use an additional variable while receiving data from the channel to check whether the channel has been closed.
```go
v, ok := <- ch
```
In the above statement `ok` is `true` if the value was received by a successful send operation to a channel. If `ok` is `false` it means that we are reading from a closed channel. The value read from a closed channel will be the zero value of the channel's type. For example if the channel is an `int` channel, then the value received from a closed channel will be `0`.
```go
func producer(chnl chan int) {  
    for i := 0; i < 10; i++ {
        chnl <- i
    }
    close(chnl)
}
func main() {  
    ch := make(chan int)
    go producer(ch)
    for {
        v, ok := <-ch
        if ok == false {
            break
        }
        fmt.Println("Received ", v, ok)
    }
    // the for loop can be write such as below
    for v := range ch {
        fmt.Println("Received ",v)
    }
}
```
```
Received  0 true  
Received  1 true  
Received  2 true  
Received  3 true  
Received  4 true  
Received  5 true  
Received  6 true  
Received  7 true  
Received  8 true  
Received  9 true  
```
