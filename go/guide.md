## Compile to run on Linux
```sh
GOOS=linux go build -o file-name
```

## Get essential libraries
```sh
go get -v
```

## Use dependencies by create go.mod file
```
go mod init module-name
```
By create this file your module can use all dependencies in `$GOPATH/src`.

If `$GOPATH/src` don't have your depenndency, use `go get package-name` to get it.

## Workspace
Before create a project we need to create workspace by creating new folder and set it to `GOPATH` variable environment.

## Update dependences from source code
```
go mod tidy
```

## Build and install
- Go build: build the binary excutable file at current path.
- Go install: build the binary excutable file, output is `%GOPATH%/bin`.

## Packaging dependences
Copy all the required dependences of project to `vendor` folder in project folder
```
go mod vendor
```

## Set environment variables
Open vscode at project path  
Press hotkey: Ctrl + Shift + C
```
setx GOPATH "project-path"
```