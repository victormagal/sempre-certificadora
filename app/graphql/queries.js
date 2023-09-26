import { gql } from '@apollo/client';

const getAllBranches = gql`
  query {
    filiais {
      data {
        attributes {
          label
          telefones
          endereco
          mapa
          estado {
            data {
              attributes {
                label
                uf
              }
            }
          }
        }
      }
    }
  }
`;

const getAllCategories = gql`
  query {
    categories {
      data {
        attributes {
          name
          slug
        }
      }
    }
  }
`;

const getAllPosts = gql`
  query ($page: Int!, $pageSize: Int!) {
    blogPosts(
      pagination: { page: $page, pageSize: $pageSize }
      sort: "publishedAt:desc"
    ) {
      data {
        attributes {
          image {
            data {
              attributes {
                url
              }
            }
          }
          category {
            data {
              attributes {
                name
              }
            }
          }
          title
          publishedAt
          description
          slug
        }
      }
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
  }
`;

const getAllSlides = gql`
  query {
    slideshows {
      data {
        attributes {
          banner_desktop {
            data {
              attributes {
                url
              }
            }
          }
          banner_mobile {
            data {
              attributes {
                url
              }
            }
          }
          link
        }
      }
    }
  }
`;

const getAllStates = gql`
  query {
    estados {
      data {
        attributes {
          uf
          label
        }
      }
    }
  }
`;

const getPost = gql`
  query ($slug: String!) {
    blogPosts(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          image {
            data {
              attributes {
                url
              }
            }
          }
          content
          publishedAt
        }
      }
    }
  }
`;

const getPostsByCategory = gql`
  query ($category: String!, $page: Int!, $pageSize: Int!) {
    blogPosts(
      filters: { category: { slug: { eq: $category } } }
      pagination: { page: $page, pageSize: $pageSize }
      sort: "publishedAt:desc"
    ) {
      data {
        attributes {
          image {
            data {
              attributes {
                url
              }
            }
          }
          category {
            data {
              attributes {
                name
              }
            }
          }
          title
          publishedAt
          description
          slug
        }
      }
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
  }
`;

const getProductsById = gql`
  query ($produto: String) {
    produtos(filters: { id_produto: { eq: $produto } }) {
      data {
        attributes {
          id_produto
          nome
          valor
          valor_desconto
          percentual_desconto
          valor_com_desconto
          certificado {
            data {
              attributes {
                tipo
              }
            }
          }
          descricao
        }
      }
    }
  }
`;

const getProductsByType = gql`
  query ($tipo: String) {
    produtos(filters: { certificado: { tipo: { eq: $tipo } } }) {
      data {
        attributes {
          id_produto
          nome
          valor
          valor_desconto
          percentual_desconto
          valor_com_desconto
          certificado {
            data {
              attributes {
                tipo
              }
            }
          }
          descricao
        }
      }
    }
  }
`;

const getTestimonies = gql`
  query {
    depoimentos {
      data {
        id
        attributes {
          name
          rule
          description
        }
      }
    }
  }
`;

export {
  getAllBranches,
  getAllCategories,
  getAllPosts,
  getAllSlides,
  getAllStates,
  getPost,
  getPostsByCategory,
  getProductsById,
  getProductsByType,
  getTestimonies
};
