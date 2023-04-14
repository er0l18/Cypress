/// <reference types="cypress" />

describe('Testy API dla https://httpbin.org/#/', () => {
    it('Test GET', () => {
      cy.request('GET', 'https://httpbin.org/get')
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('url')
        })
    })
  
    it('Test POST', () => {
      cy.request('POST', 'https://httpbin.org/post', { name: 'Tomek', age: 32 })
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('json')
          expect(response.body.json).to.deep.eq({ name: 'Tomek', age: 32 })
        })
    })
  
    it('Test PUT', () => {
      cy.request('PUT', 'https://httpbin.org/put', { name: 'Maciek', age: 29 })
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('json')
          expect(response.body.json).to.deep.eq({ name: 'Maciek', age: 29 })
        })
    })
  
    it('Test DELETE', () => {
      cy.request('DELETE', 'https://httpbin.org/delete')
        .then((response) => {
          expect(response.status).to.eq(200)
        })
    })
  
    it('Test nagłówków standardowych', () => {
      cy.request({
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: {
          'User-Agent': 'Cypress Hill'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.headers['User-Agent']).to.eq('Cypress Hill')
      })
    })
  
    it('Test nagłówków niestandardowych', () => {
      cy.request({
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: {
          'Test-Header123': 'Test Value'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.headers['Test-Header123']).to.eq('Test Value')
      })
    })
  
    it('Test wysyłania parametrów zapytania', () => {
      cy.request({
        method: 'GET',
        url: 'https://httpbin.org/get',
        qs: {
          arg1: 'test1',
          arg2: 'test2'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.args.arg1).to.eq('test1')
        expect(response.body.args.arg2).to.eq('test2')
      })
    })
  
    it('Test losowych parametrów zapytania', () => {
      const random = Math.floor(Math.random() * 100)
      cy.request({
        method: 'GET',
        url: 'https://httpbin.org/get',
        qs: {
          random: random
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.args.random).to.eq(random.toString())
      })
    })
  
    it('Test sprawdzania treści odpowiedzi', () => {
      cy.request('GET', 'https://httpbin.org/base64/VGVzdHVqZW15IHN0cm9uxJkgaHR0cHM6Ly9odHRwYmluLm9yZy9iYXNlNjQv')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.eq('Testujemy stronę https://httpbin.org/base64/')
      })
    })

    it('Test sprawdzania czasu trwania wniosku', () => {
      cy.request('GET', 'https://httpbin.org/delay/1')
        .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.duration).to.be.greaterThan(1000)
      })
    })
})