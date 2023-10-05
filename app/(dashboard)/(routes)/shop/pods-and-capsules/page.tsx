import Separator from '@/components/ui/separator';
import supabase from '@/config/supabaseClient';
import ProductsCollection from '../components/products-colection';

async function PodsAndCapsulesPage() {
  const getProducts = async () => {
    const { data, error } = await supabase.from('coffee-grains').select();

    if (error) {
      console.error('Error fetching product:', error);
      return null;
    }

    return data;
  };

  const products = await getProducts();

  return (
    <section className="mt-[100px] flex flex-col items-center justify-center px-3 md:px-20">
      <section className="w-full space-y-3 max-w-[1100px]">
        <h1 className="font-playfair-display text-7xl">Coffee Grains</h1>
        <p>Home / Shop /Coffee Grains</p>
        <Separator className="bg-gray-600" />
      </section>
      <ProductsCollection />
    </section>
  );
}
export default PodsAndCapsulesPage;
