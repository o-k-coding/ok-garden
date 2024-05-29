import { useState } from 'preact/hooks';

export default function ContentCode() {
  const submitCode = () => {
    
    if (contentCode === 'vennelos42') {
      localStorage.setItem('contentCode', contentCode);
      const urlParams = new URLSearchParams(window.location.search);
      const page = urlParams.get('page');
      window.location.href = page;
    }
  };

  const [contentCode, setContentCode] = useState();

  return (
    <div>
      <label>
        Content code
        <input name="contentCode" value={contentCode} onChange={e => setContentCode(e.target.value)} style={{margin: '1em'}} />
      </label>
      <button onClick={submitCode}>
        Submit
      </button>
    </div>
  );
}
