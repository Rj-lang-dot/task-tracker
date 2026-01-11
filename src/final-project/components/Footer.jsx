function Footer({ total, completed }) {
  return (
    <footer>
      <p>Total Tasks: {total}</p>
      <p>Completed Tasks: {completed}</p>
    </footer>
  );
}

export default Footer;
