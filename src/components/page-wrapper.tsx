

type props = {
    children: React.ReactNode
}

function AppPageWrapper({children}: props) {
  return (
    <div className='p-12 desktop:px-40'>
      {children}
    </div>
  )
}

export default AppPageWrapper
