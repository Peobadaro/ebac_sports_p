import { useGetProdutosQuery } from '../store/apiSlice';
import { useDispatch } from 'react-redux';
import { adicionarAoCarrinho } from '../store/carrinhoSlice';

function Produtos() {
  const dispatch = useDispatch();
  const { data: produtos, isLoading, error } = useGetProdutosQuery();

  if (isLoading) return <p>Carregando produtos...</p>;
  if (error) return <p>Erro ao carregar produtos.</p>;

  return (
    <div>
      {produtos?.map((produto) => (
        <div key={produto.id}>
          <h2>{produto.nome}</h2>
          <p>Preço: {produto.preco}</p>
          <button onClick={() => dispatch(adicionarAoCarrinho(produto))}>
            Adicionar ao Carrinho
          </button>
        </div>
      ))}
    </div>
  );
}

export default Produtos;