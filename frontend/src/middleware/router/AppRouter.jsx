import React from 'react'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
            <Route path="" element={<LoginForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
