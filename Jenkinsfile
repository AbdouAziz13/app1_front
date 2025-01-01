pipeline {
    agent any

    tools {
        nodejs 'node-23.5.0'
    }

    environment {
        BUILD_DIR = 'my-app'
    }

    stages {
        stage('Setup Environment') {
            steps {
                echo 'Setting up the environment...'
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                dir("${BUILD_DIR}") {
                    sh 'npm install'
                }
            }
        }

        stage('Build Application') {
            steps {
                echo 'Building the application...'
                dir("${BUILD_DIR}") {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                dir("${BUILD_DIR}") {
                    script {
                        sh 'docker build -t my-app:latest .'
                        sh 'docker run -d -p 8080:80 my-app:latest'
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Pipeline executed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
