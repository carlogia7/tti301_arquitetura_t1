# TAREFA 1 de Consulta Climática
## Arquitetura de Sistemas e Soluções Computacionais
##
## Descrição

Este projeto tem como objetivo consultar informações climáticas utilizando a API do OpenWeatherMap. O sistema realiza duas principais consultas:

1. **Consulta de coordenadas latitude/longitude**: A partir do nome de uma cidade, o sistema obtém suas coordenadas de latitude e longitude.
2. **Consulta de condições atuais**: Usando as coordenadas obtidas, o sistema consulta as condições climáticas atuais, incluindo a sensação térmica (`feels_like`) e a descrição do clima (`description`).

## Tarefas:

### 1. Consulta de Coordenadas Latitude/Longitude

- **Descrição**: Enviar o nome de uma cidade para a API de geocodificação e obter as coordenadas latitude e longitude dessa cidade.
- **Serviço Utilizado**: [OpenWeatherMap Geocoding API](https://openweathermap.org/api/geocoding-api)
- **Mensagem do Commit**: `feat(t1): obtem coords a partir de cidade`

### 2. Consulta de Condições Atuais

- **Descrição**: Enviar as coordenadas obtidas anteriormente para a API de clima e obter a sensação térmica e a descrição das condições climáticas atuais.
- **Serviço Utilizado**: [OpenWeatherMap Current Weather API](https://openweathermap.org/current)
- **Mensagem do Commit**: `feat(t1): obtem previsao a partir de coords`

## Tags

- **Tag Anotada**: `entrega(t1): conclui as atividades`
  - **Descrição**: Marca o final das atividades do projeto.

## Contribuidores

- **Carlo Giacometti Guerreiro** - RA: 22.01163-3
- **Daniel Djinishian de Briquez** - RA: 22.00251-0
- **Guilherme Castro Alves** - RA: 22.00916-7
- **Guilherme Ferreira do Nascimento** - RA: 22.01285-0
- **Victor Simon Paulo** - RA: 22.00117-4

---

Para mais informações, consulte a [documentação da API](https://openweathermap.org/api) do OpenWeatherMap.
