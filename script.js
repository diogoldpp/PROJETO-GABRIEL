// Rolagem suave para links internos (ex.: menu "Jogos" leva à seção #jogos)
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (evento) {
    var id = link.getAttribute('href');

    // Links com apenas "#" não têm destino, então seguem o comportamento padrão
    if (id.length > 1) {
      var destino = document.querySelector(id);

      if (destino) {
        evento.preventDefault();
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
