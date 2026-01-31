// Site footer displaying the band email and a dynamic copyright year.
export default function Footer() {
  return (
    <footer>
      <p>ttkhband@gmail.com</p>
      <p>&copy; {new Date().getFullYear()} Through The Kitchen Hole</p>
    </footer>
  );
}
