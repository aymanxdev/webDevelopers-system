import React from 'react'
import PropTypes from 'prop-types'
import {deleteTech} from '../../actions/techActions'
import { connect } from 'react-redux'
import M from 'materialize-css/dist/js/materialize.min.js'


function TechItem({tech, deleteTech}) {

    const onDelete = () => {
        deleteTech(tech.id)
        M.toast({html: 'Tech is Deleted'})
    }

    return (
        <div className="collection-item">
        <div>
            {tech.firstName} {tech.lastName}
            <a href="!#" className="secondary-content"><i onClick={onDelete} className="material-icons grey-text"> delete</i></a>
        </div>
            
        </div>
    )
}

TechItem.propTypes = {
tech: PropTypes.object.isRequired,
deleteTech: PropTypes.func.isRequired,
}

export default connect(null, {deleteTech})(TechItem)

