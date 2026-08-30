<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Método no permitido']);
  exit;
}

$nombre = trim((string) ($_POST['nombre'] ?? ''));
$apellido = trim((string) ($_POST['apellido'] ?? ''));
$celular = trim((string) ($_POST['celular'] ?? ''));
$correo = trim((string) ($_POST['correo'] ?? ''));
$asunto = trim((string) ($_POST['asunto'] ?? 'Consulta desde cprotec.net'));
$mensaje = trim((string) ($_POST['mensaje'] ?? ''));

if ($nombre === '' || $apellido === '' || $celular === '' || $correo === '' || $mensaje === '') {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Completa los campos obligatorios.']);
  exit;
}

if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'El correo no es válido.']);
  exit;
}

$body = "Nombre: {$nombre} {$apellido}\nCelular: {$celular}\nCorreo: {$correo}\n\n{$mensaje}\n";
$headers = [
  'From: info@cprotec.net',
  'Reply-To: ' . $correo,
  'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail('info@cprotec.net', 'Contacto web: ' . $asunto, $body, implode("\r\n", $headers));

echo json_encode([
  'ok' => (bool) $sent,
  'error' => $sent ? null : 'No se pudo enviar. Escríbenos a info@cprotec.net.',
]);
