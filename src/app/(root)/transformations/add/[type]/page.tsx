import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm'
import { transformationTypes } from '@/constants'
import React from 'react'
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { getUserById } from '@/lib/actions/user.action';

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {

  const { userId } = auth();
  const transformation = transformationTypes[type];

  if(!userId) redirect('/sign-in');
  const user = await getUserById(userId);


  return (
    <>
      <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
      />
    
      <section className="mt-10">
        <TransformationForm 
          action="Add"
          userId="662f551af47dca7764f5f49b"
          type={transformation.type as TransformationTypeKey}
          creditBalance={10}
        />
      </section>
    </>
  ) 
}

export default AddTransformationTypePage