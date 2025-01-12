pipeline {
    agent any  // Utiliser n'importe quel agent disponible pour exécuter le pipeline

    tools {
        nodejs 'Cypress config'  // Assurez-vous que 'Cypress config' est bien configuré dans Jenkins
    }

    environment {
        // Définir le chemin de base pour éviter les répétitions
        PROJECT_PATH = "F:/ProjectTest/ProjectCypress"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    echo "Installing project dependencies..."
                    bat """
                    cd /d "${PROJECT_PATH}" 
                    npm install 
                    npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev
                    """
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    echo "Executing Cypress tests..."
                    bat """
                    cd /d "${PROJECT_PATH}" 
                    npx cypress run
                    """
                }
            }
        }

        stage('Deploy Application') {
            steps {
                echo "Deploying the application (placeholder for deployment step)..."
                // Ajoutez ici les étapes de déploiement si nécessaires
            }
        }

        stage('Generate Test Report') {
            steps {
                script {
                    echo "Generating HTML test report..."
                    bat """
                    cd /d "${PROJECT_PATH}" 
                    npx cypress run --reporter mochawesome
                    """
                }
            }
        }
        
    }

    post {
        always {
            echo "Cleaning up the workspace..."
            cleanWs()  // Nettoie les fichiers temporaires dans l'espace de travail Jenkins
        }
    }
}