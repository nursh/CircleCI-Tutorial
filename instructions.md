### How to use CircleCI

* Using Trunk base workflow
  * Commiting to one branch and using the branch for everything
    * usually master

* Create a .circleci folder 
  * in the folder, create a config file
  * write all your configuration in the config file
* Check the steps in circleci config file and update your run command
  * update yarn to npm

* if you want to skip ci, add it to your commit message
  * git commit -am 'commit message [skip ci]'