// it("renders without crashing", () => {
//     shallow(<AdminNoticeAdd/>);
//   });
  
//   it("renders Account header", () => {
//     const wrapper = shallow(<AdminNoticeAdd/> );
//     const welcome = <h1>Add Notice</h1>;
//     expect(wrapper.contains(welcome)).toEqual(true);
//   });
//   describe('Addition', () => {
//   it('knows that 2 and 2 make 4', () => {
//     expect(2 + 2).toBe(4);
//   });
// });

describe('my sweet test', () => {
    it('clicks it', () => {
      
       const wrapper = shallow(<ALogin />);
       const updatedEmailInput = simulateChangeOnInput(wrapper, 'input#email-input', 'blah@gmail.com')
       const updatedPasswordInput = simulateChangeOnInput(wrapper, 'input#password-input', 'death'); 

       expect(updatedEmailInput.props().value).toEqual('blah@gmail.com');
       expect(updatedPasswordInput.props().value).toEqual('death');

       const instance = wrapper.instance()
       const spy = jest.spyOn(instance, 'handleSubmit')
   
       instance.forceUpdate();    
   
       const submitBtn = app.find('#sign-in')
       submitBtn.simulate('click')
       expect(spy).toHaveBeenCalled()

    })
    
  })