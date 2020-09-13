package main

import (
	"fmt"
)

func main() {
	// fruitarray := [...]string{"apple", "orange", "grape", "mango", "water melon", "pine apple"}
	fruitslice := []string{"apple", "orange", "grape", "mango", "water melon", "pine apple"}
	fmt.Printf("length of slice %d capacity %d\n", len(fruitslice), cap(fruitslice)) //length of is 2 and capacity is 6
	fruitslice = fruitslice[:cap(fruitslice)]
	fruitslice = append(fruitslice, "hehe") //re-slicing furitslice till its capacity
	fmt.Println(fruitslice, "After re-slicing length is", len(fruitslice), "and capacity is", cap(fruitslice))
}
