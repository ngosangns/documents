@echo off
cmd /C <build.bat>
ftp -n -s:deploy_script.txt <host>