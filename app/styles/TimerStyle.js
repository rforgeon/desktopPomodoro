import reactCSS from 'reactcss'


  export const styles = reactCSS({
    'default': {
      circle: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: '-175px',
        marginLeft: '-95px',
        boxShadow: '1px 7px 8px 6px rgba(0,0,0,0.4)',
          MozBoxShadow: '5px 10px 10px 7px rgba(0,0,0,0.6)',
          WebkitBoxShadow: '5px 10px 10px 7px rgba(0,0,0,0.6)',
          OBoxShadow: '5px 10px 10px 7px rgba(0,0,0,0.6)',
          borderRadius: '200px',

      },
      timerTime:{
        fontFamily: "HelveticaNeue",
        fontSize: '60px',
        color: '#455A64',
        letterSpacing: '-0.98px',
      },
      timeSpacing:{
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: '-115px',
        marginLeft: '-74px',
      },
      topRow:{
        position: 'relative',
        height: '225px',
        float: 'top',
        background: '#FFFFFF',
        boxShadow: '0px 8px 8px 0px rgba(0,0,0,0.50)',
        zIndex: '1'
      },
      bottomBackground:{
        background: '#607D8B',
        height: '500px',
        width: '100%',
        float: 'bottom',
        zIndex: '-1'
      },
      mainHight:{
        height: '100%'
      },
      playPauseButton:{
        position: 'fixed',
        top: '48%',
        left: '5%',
        height: '70px',
        width: '70px',
        radius: '100px',
        cursor: 'pointer',
        background: '#455A64',
        boxShadow: '0px 10px 11px 0px rgba(0,0,0,0.50)',
          MozBoxShadow: '5px 10px 10px 7px rgba(0,0,0,0.6)',
          WebkitBoxShadow: '5px 10px 10px 7px rgba(0,0,0,0.6)',
          OBoxShadow: '5px 10px 10px 7px rgba(0,0,0,0.6)',
          borderRadius: '200px'
      },
      playIcon:{
        position: 'fixed',
        top: '54.5%',
        left: '14%'
      },
      pauseIcon:{
        position: 'fixed',
        top: '56%',
        left: '18%'
      },
      refreshIcon:{
        position: 'fixed',
        top: '50.5%',
        right: '9%',
        width: '50px',
        height: 'auto'
      },
      resetButton:{
        position: 'fixed',
        top: '48%',
        right: '5%',
        height: '70px',
        width: '70px',
        radius: '100px',
        cursor: 'pointer',
        background: '#455A64',
        boxShadow: '0px 10px 11px 0px rgba(0,0,0,0.50)',
          MozBoxShadow: '5px 10px 10px 7px rgba(0,0,0,0.6)',
          WebkitBoxShadow: '5px 10px 10px 7px rgba(0,0,0,0.6)',
          OBoxShadow: '5px 10px 10px 7px rgba(0,0,0,0.6)',
          borderRadius: '200px'
      },
      workSessionCircle:{
        position: 'fixed',
        bottom: '30%',
        height: '10px',
        width: '10px',
        background: '#455A64',
        border: '',
        boxShadow: '',
        borderRadius: '100px',
      },
      breakSessionRec:{
        position: 'fixed',
        top: '70.5%',
        height: '25px',
        width: '10px',
        marginLeft: '1px',
        marginTop: '-10px',
        background: '#455A64',
        borderRadius: '3px',
        boxShadow: '',
      },
      total:{
        fontFamily: "HelveticaNeue",
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: '120.5px',
        marginLeft: '-60px',
        fontSize: '13px',
        color: '#37474F'
      },
      totalHrsText:{
        fontFamily: "HelveticaNeue",
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: '120.5px',
        marginLeft: '-7px',
        fontSize: '13px',
        color: '#37474F'
      },
      currentTotalHrs:{
        fontFamily: "HelveticaNeue",
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: '119px',
        marginLeft: '-23px',
        fontSize: '15px',
        color: '#37474F'
      },
      totalMinsText:{
        fontFamily: "HelveticaNeue",
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: '120.5px',
        marginLeft: '32px',
        fontSize: '13px',
        color: '#37474F'
      },
      currentTotalMins:{
        fontFamily: "HelveticaNeue",
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: '119px',
        marginLeft: '15px',
        fontSize: '15px',
        color: '#37474F'
      },
      statusText:{
        fontFamily: "HelveticaNeue",
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: '143px',
        marginLeft: '-50px',
        fontSize: '13px',
        color: '#37474F'
      },
      currentStatus:{
        fontFamily: "HelveticaNeue",
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: '141px',
        marginLeft: '-5px',
        fontSize: '15px',
        color: '#90E4EF'
      },
      sunrise:{
        position: 'fixed',
        bottom: '2%',
        marginLeft: '-3%',
        width: '45px',
        height: 'auto'
      },
      sunset:{
        position: 'fixed',
        bottom: '2%',
        left: '83%',
        width: '45px',
        height: 'auto'
      },
      col1:{
        width: '4.75%',
        float: 'left',
        padding: '.05px'
      },
      col2:{
        width: '9.52%',
        float: 'left',
        padding: '1px'
      },
      col3:{
        width: '14.28%',
        float: 'left',
        padding: '1px'
      },
    }
  })
