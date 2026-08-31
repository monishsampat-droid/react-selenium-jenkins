pipeline {
    agent any

    stages {
        stage('Start React Application') {
            steps {
                bat '''
                    @echo off
                    echo Starting React application...
                    
                    :: Prevent Jenkins from killing the background process after step finishes
                    set JENKINS_NODE_COOKIE=dontKillMe
                    
                    :: Start React in the background and redirect output to a log file
                    start "ReactApp" /B cmd /c "npm start > react.log 2>&1"
                    
                    echo Waiting for React application to start on port 3000...
                    
                    :: Retry loop to wait until the application is responding
                    set MAX_RETRIES=30
                    set RETRY_COUNT=0
                    
                    :check_port
                    timeout /t 2 /nobreak > nul
                    netstat -ano | findstr :3000 | findstr LISTENING > nul
                    if %ERRORLEVEL% equ 0 (
                        echo React application is up and listening on port 3000!
                        goto app_ready
                    )
                    
                    set /a RETRY_COUNT+=1
                    if %RETRY_COUNT% gtr %MAX_RETRIES% (
                        echo ERROR: React application failed to start in time. Check react.log for details.
                        exit /b 1
                    )
                    
                    echo Still waiting... (%RETRY_COUNT%/%MAX_RETRIES%)
                    goto check_port
                    
                    :app_ready
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