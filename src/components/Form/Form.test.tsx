import {render} from '@testing-library/react';
import Form from './form'

it('CheckButtonRender', () => {
 const {queryAllByTitle} =  render(<Form />)
 const btn = queryAllByTitle ('todo-button')
 expect(btn).toBeTruthy();
})

  it('searchRenderCheck', () => {
  const {queryAllByTitle} =  render(<Form />)
  const input = queryAllByTitle ('todo-search')
  expect(input).toBeTruthy();
  })


    it('checkButtonDelete', ()=>{
    const {queryAllByTitle} =  render(<Form />);
    const input = queryAllByTitle ('todo-delete');
    expect(input).toBeTruthy();
    });


    it('checkCompleteButton', ()=>{
      const {queryAllByTitle} =  render(<Form />);
      const completeButton = queryAllByTitle ('button');
      expect(completeButton).toBeTruthy();
      });

    it('checkTodoForm', ()=>{
      const {queryAllByTitle} =  render(<Form />);
      const form = queryAllByTitle ('new-todo-form');
      expect(form).toBeTruthy();
    });

    it('checkTitle', ()=>{
      const {queryAllByTitle} =  render(<Form />);
      const h1 = queryAllByTitle ('h1');
      expect(h1).toBeTruthy();
    });
    
    it('checkSubTitle', ()=>{
      const {queryAllByTitle} =  render(<Form />);
      const h2 = queryAllByTitle ('todo-text');
      expect(h2).toBeTruthy();
    });

    it('checkSubTitle', ()=>{
      const {queryAllByTitle} =  render(<Form />);
      const submit = queryAllByTitle ('submit');
      expect(submit).toBeTruthy();
    });


