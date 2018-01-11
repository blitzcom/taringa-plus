import React from 'react'

const Paginator = ({ currentPage, load, maxPages }) => {

  const loadPage = load || (() => {})

  const isFirstPage = currentPage === 1
  const hasPreviousPage = currentPage > 1
  const hasNextPage = currentPage < maxPages
  const isLastPage = currentPage === maxPages

  const scrollTop = () => {
    window.scrollTo(0, 0)
  }

  const handleFirstPage = (e) => {
    e.preventDefault()
    loadPage(1)
    scrollTop()
  }

  const handleNextPage = (e) => {
    e.preventDefault()
    loadPage(currentPage + 1)
    scrollTop()
  }

  const handlePreviousPage = (e) => {
    e.preventDefault()
    loadPage(currentPage - 1)
    scrollTop()
  }

  const handleLastPage = (e) => {
    e.preventDefault()
    loadPage(maxPages)
    scrollTop()
  }


  return (
    <div className='text-center'>
      <ul className='list-inline'>
        <li>
          {
            !isFirstPage
            ? <a href={`/posts/1`} onClick={handleFirstPage}>Primero</a>
            : <span className='text-muted'>Primero</span>
          }
        </li>

        <li>
          {
            hasPreviousPage
            ? <a href={`/posts/${currentPage - 1}`} onClick={handlePreviousPage}>Anterior</a>
            : <span className='text-muted'>Anterior</span>
          }
        </li>

        <li> { currentPage } </li>

        <li>
          {
            hasNextPage
            ? <a href={`/posts/${currentPage + 1}`} onClick={handleNextPage}>Siguiente </a>
            : <span className='text-muted'>Siguiente</span>
          }

        </li>
        <li>
          {
            !isLastPage
            ? <a href={`/posts/${maxPages}`} onClick={handleLastPage}>Último</a>
            : <span className='text-muted'>Último</span>
          }
        </li>
      </ul>
    </div>
  )
}

export default Paginator
