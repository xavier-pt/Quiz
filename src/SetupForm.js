import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext()
  return (
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form'>
          <h2>setup quiz</h2>
          {/* amount */}
          <div className='form-control'>
            <label htmlFor='amount'>número de questões</label>
            <input
              type='number'
              name='amount'
              id='amount'
              value={quiz.amount}
              onChange={handleChange}
              className='form-input'
              min={1}
              max={50}
            />
          </div>
          {/* category */}

          <div className='form-control'>
            <label htmlFor='category'>categoria</label>
            <select
              name='category'
              id='category'
              className='form-input'
              value={quiz.category}
              onChange={handleChange}
            >
              <option value='sports'>Esportes</option>
              <option value='history'>história</option>
              <option value='politics'>política</option>
            </select>
          </div>
          {/* difficulty */}

          <div className='form-control'>
            <label htmlFor='difficulty'>selecione a dificuldade</label>
            <select
              name='difficulty'
              id='difficulty'
              className='form-input'
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value='easy'>fácil</option>
              <option value='medium'>média</option>
              <option value='hard'>dura</option>
            </select>
          </div>
          {error && (
            <p className='error'>
             não pode gerar perguntas, por favor, tente opções diferentes
            </p>
          )}
          <button type='submit' onClick={handleSubmit} className='submit-btn'>        
começar
          </button>
        </form>
      </section>
    </main>
  )
}

export default SetupForm
