import { StyleSheet } from 'react-native'


export default StyleSheet.create({
	outerParent: {
		flex: 1,
	},

	contentArea: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	text: {
		color: 'black',
		fontSize: 25,
		textAlign: 'center',
		borderWidth: 2,
		borderColor: 'black',
		padding: 30,
		margin: 20
    },
   container: {
       backgroundColor: '#fff',
       flex: 1,
       alignItems:'center',
       justifyContent: 'center'
   },
   signupContent:{
    flexGrow: 1,
    alignItems:'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'

   },
  inputBox:{
        width:300,
        borderBottomColor:'blue',
        borderRadius: 10,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000',
        marginVertical: 10,
        borderColor: 'blue',
        borderWidth: 1
    },
    button:{
        width:300,
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingVertical: 16,
        marginVertical: 10,
    },
    buttonText:{
        fontSize: 16,
        fontWeight :'500',
        color: '#ffffff',
        textAlign:'center'
    },
    signupTextCont : {
        flexGrow: 1,
      alignItems:'flex-end',
      justifyContent :'center',
      paddingVertical:16,
      flexDirection:'row'
    },
    signupText: {
        color:'#000',
        fontSize:16
    },
    signupButton: {
        color:'blue',
        fontSize:16,
        fontWeight:'500'
    },
})