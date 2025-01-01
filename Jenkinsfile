pipeline {
    agent any
    

    stages {
        stage('building the application-frontend') {
            steps {
                echo 'Package installation...'
                nodejs('node-23.5.0') { 
                    dir('my-app') { 
                        sh 'npm install'
                        echo 'running the application'
                        sh 'npm start'
                    }
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}