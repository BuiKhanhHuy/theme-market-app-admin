import { Spin } from 'antd'

const Loader = () => {
  return (
    <div style={{ height: '100vh', width: '100%',  position: 'absolute', top: 0, left: 0 }}>
      <Spin tip="Loading" size="large" style={{ margin: 'auto'}}/>
    </div>
  )
}

export default Loader