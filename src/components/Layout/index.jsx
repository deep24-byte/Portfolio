import Sidebar from '../Sidebar';
import './index.scss';




const Layout = ({children}) => {
    return (
        <>
        <div className='App'>
            <Sidebar/>
            <div className='page'>
                <span className='tags top-tags'> &lt;body&gt; </span>

                {/* <Outlet/> */}
                {children}

                <span className='tags bottonm-tags'>
                &lt;/body&gt;
                <br />
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>
            </div>
        </div>
        
        </>
    )
}

export default Layout;