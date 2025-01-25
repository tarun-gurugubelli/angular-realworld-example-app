pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                // Checkout code from GitHub
                git branch: 'main', url: 'https://github.com/tarun-gurugubelli/angular-realworld-example-app.git'
            }
        }
        stage('Build') {
            steps {
                script {
                    // Install dependencies and build the Angular app
                    sh 'npm install'
                    sh 'ng build --prod'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    sh 'docker build -t my-angular-app .'
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                script {
                    // Login to Docker Hub using stored credentials
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                        sh 'docker push my-angular-app'
                    }
                }
            }
        }
    }
}
