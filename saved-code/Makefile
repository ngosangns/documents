export username=ngosangns
commit:
	git add .
	git commit -m "${username}: $(shell echo %date%%time%)"

pull: | commit
	git add .
	git pull

push: | commit
	git push