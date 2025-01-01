pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/username/frontend-repo.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build Frontend') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: 'build/**/*', fingerprint: true
            }
        }
    }
}
