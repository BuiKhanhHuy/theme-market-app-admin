import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { checkNumber } from '../../utils/commonFunc';

const Breadcrumb = () => {
    const location = useLocation();
    const [titles, setTitles] = React.useState<ItemType[]>([{
        title: <Link to="/">Dashboard</Link>,
    }])

    React.useEffect(() => {
        let currentLink = ''
        const newCrumns: ItemType[] = []

        const crumbs = location.pathname.split("/").filter(crumb => crumb !== "")
        crumbs.forEach(crumb => {
            if (!checkNumber(crumb)) {
                currentLink += `/${crumb}`
                
                crumb = crumb.split('-').join(' ')
                newCrumns.push({
                    title: <Link to={currentLink}>{crumb[0].toUpperCase() + (crumb.length > 1 ? crumb.substring(1, crumb.length) : "")}</Link>
                })
            }
        });

        setTitles([{
            title: <Link to="/">Dashboard</Link>,
        }, ...newCrumns])

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    return (
        <AntdBreadcrumb items={titles} />
    )
}

export default Breadcrumb

