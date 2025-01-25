pipeline {
    agent any

    parameters {
        string(name: 'DOCKER_USERNAME', defaultValue: 'tarungurugubelli', description: 'Docker Hub Username')
        password(name: 'DOCKER_PASSWORD', defaultValue: '', description: 'Docker Hub Password or Access Token')
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Checkout code from GitHub
                git branch: 'main', url: 'https://github.com/tarun-gurugubelli/angular-realworld-example-app.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    sh 'docker build -t ${DOCKER_USERNAME}/my-angular-app .'
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    // Run the Docker container to serve the Angular app
                    sh "docker run -d -p 4300:80 ${DOCKER_USERNAME}/my-angular-app"
                }
            }
        }
        stage('Login to Docker Hub') {
            steps {
                script {
                    // Use parameters to log in to Docker Hub
                    sh "echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin"
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    // Push the image to Docker Hub
                    sh "docker push ${DOCKER_USERNAME}/my-angular-app"
                }
            }
        }
    }

    post {
        always {
            // Logout from Docker Hub
            sh 'docker logout'
        }
    }
}
