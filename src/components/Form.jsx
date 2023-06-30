import React, { useEffect, useRef } from 'react';

const Form = (props) => {
  const inputRef = useRef(null);

  useEffect(() => {
    // При загрузке компонента проверяем наличие сохраненного значения в локальном хранилище
    const savedCity = localStorage.getItem('city');
    if (savedCity) {
      // Если значение найдено, устанавливаем его в поле ввода
      inputRef.current.value = savedCity;
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Предотвращаем обновление страницы после отправки формы
    const city = inputRef.current.value;//получения значения, введенного пользователем в поле ввода
    localStorage.setItem('city', city); // Сохраняем значение поля ввода в локальном хранилище
    props.weather(e); // Вызываем функцию props.weather для обработки данных формы
  };

  return (
    <form onSubmit={handleFormSubmit} className='form'>
      <input ref={inputRef} type="text" name='city' placeholder='Введите ваш город' required />
      <button type="submit">Узнать</button>
    </form>
  );
};

export default Form;