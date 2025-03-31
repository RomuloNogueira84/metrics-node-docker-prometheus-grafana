# Métricas com Prometheus e Grafana

Este projeto implementa uma aplicação em Node.js que expõe métricas para o Prometheus, e utiliza o Grafana para criar dashboards interativos.
Ele foi configurado utilizando Docker Compose para simplificar o gerenciamento dos serviços.

---

## 💡 **Objetivo**

O objetivo deste projeto é monitorar e exibir a métrica `hello_requests_total
`, que contabiliza o número de acessos ao endpoint principal da aplicação. As métricas são coletadas pelo Prometheus e visualizadas no Grafana.

---

## 🚀 **Tecnologias Utilizadas**

- **Node.js**: Criação da aplicação e exposição das métricas.
- **Prometheus**: Coleta e armazenamento de métricas.
- **Grafana**: Visualização das métricas em dashboards.
- **Docker & Docker Compose**: Gerenciamento e configuração de contêineres.

---

## 📋 **Pré-requisitos**

Antes de iniciar o projeto, você precisará ter:

1. **Docker Desktop** instalado e funcionando no seu sistema.
2. **Node.js** e npm instalados, caso deseje modificar o código localmente.

---

## 📂 **Estrutura do Projeto**

- **Dockerfile**: Configura o ambiente para a aplicação Node.js.
- **prometheus.yml**: Arquivo de configuração do Prometheus.
- **docker-compose.yml**: Define todos os serviços utilizados (Node.js, Prometheus e Grafana).

---

## 🛠️ **Configuração**

### Passo 1: Clonar o Repositório
```bash
git clone <url-do-repositorio>
cd ola-Metrics
