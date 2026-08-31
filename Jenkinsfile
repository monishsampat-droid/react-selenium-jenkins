pipeline {
    agent any

    stages {

        stage('Checkout Source Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat '''
                    @echo off
                    echo Installing Node.js dependencies...
                    call npm install
                '''
            }
        }

        stage('Start React Application') {
            steps {
                bat '''
                    @echo off
                    echo Starting React application...
                    start /B cmd /c "npm start"
                    
                    echo Waiting for React application...
                    timeout /t 15 /nobreak
                '''
            }
        }

        stage('Run Selenium Tests') {
            steps {
                bat '''
                    @echo off
                    echo Running Selenium tests...
                    call npx mocha tests/app.test.js
                '''
            }
        }
    }

    post {
        always {
            echo 'React Selenium pipeline execution completed.'
        }
    }
}