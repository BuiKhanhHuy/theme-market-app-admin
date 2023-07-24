import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb as AntdBreadcrumb } from 'antd';

const Breadcrumb = () => {
    const location = useLocation();
    const [titles, setTitles] = React.useState([{
        title: <Link to="/">Dashboard</Link>,
    }])

    React.useEffect(() => {
        let currentLink = ''
        const crumbs = location.pathname.split("/").filter(crumb => crumb !== "").map(crumb => {
            crumb = crumb.split('-').join(' ')

            currentLink += `/${crumb}`
            return { title: <Link to={currentLink}>{crumb[0].toUpperCase() + (crumb.length > 1 ? crumb.substring(1, crumb.length) : "")}</Link> }
        })

        setTitles([{
            title: <Link to="/">Dashboard</Link>,
        }, ...crumbs])

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    return (
        <AntdBreadcrumb items={titles} />
    )
}

export default Breadcrumb

