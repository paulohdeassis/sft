import React from 'react'

export default function NumbersSection() {
  return (
   
    <section className="numbers_container">
    <div className="number_counter">
      <div className="counter_text">
          <p>+</p>
          <div className="value" data-target="350">0</div>
      </div>
      <p className="number_label">clients</p>
  </div>
  <div className="number_counter">
      <div className="counter_text">
          <p>+</p>
          <div className="value" data-target="21">0</div>
          <p>M</p>
      </div>
      <p  className="number_label">invested in ads</p>
  </div>
  <div className="number_counter">
      <div className="counter_text">
          <p>+</p>
          <div className="value" data-target="160">0</div>
          <p>M</p>
      </div>
      <p  className="number_label">generated income to our clients</p>
  </div>

  </section>
  )
}
