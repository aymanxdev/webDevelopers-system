import React,{useEffect} from 'react'
import TechItem from './TechItem'
import { connect } from 'react-redux'
import { getTechs } from '../../actions/techActions' 
import PropTypes from 'prop-types'


 const TechListModal = ({getTechs, tech: {techs, loading}}) =>{

    
    useEffect(()=>{
        getTechs()
        //eslint-disable-next-line
    }, [])
    

    return (
      <div className="modal" id="tech-list-modal">
      <div className="modal-content">
        <h4>Web Developers</h4>
        <ul className="collection">
            {!loading &&
             techs !== null &&
             techs.map(tech => (
                <TechItem tech={tech} key={tech.id} />
            ))}
        </ul>
      </div>

      </div>
    )
}

TechListModal.prototype ={
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    tech: state.tech
})
export default connect(mapStateToProps, {getTechs})(TechListModal)